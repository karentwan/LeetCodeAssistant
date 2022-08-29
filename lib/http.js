export const http = {
	request: function (options) {
		// Post请求选项并入默认选项
		let requestOptions = {
			method: null,
			url: null,
			param: {},
			data: {},
			headers: {}
		};
		this.mergeOptions(requestOptions, options);
 
		// 格式化参数
		requestOptions.param = this.formatParams(requestOptions.param);
		let _url = requestOptions.url + (requestOptions.param ? ('?' + requestOptions.param) : '');
 
		let _data = requestOptions.data;
		if (typeof _data == "string") {
			requestOptions.headers["Content-type"] = "text/plain;charset=utf-8";
			_data = requestOptions.data;
		} else if (requestOptions.data instanceof FormData) {
			_data = requestOptions.data;
		} else if (typeof requestOptions.data == "object") {
			let formData = new FormData();
 
			if (Object.keys(requestOptions.data).some(key => {
				formData.append(key, requestOptions.data[key]);
				return requestOptions.data.hasOwnProperty(key) && requestOptions.data[key] instanceof File;
			})) {
				_data = formData;
			} else {
				requestOptions.headers["Content-type"] = "application/json;charset=utf-8";
				_data = JSON.stringify(requestOptions.data);
			}
		}
 
		// 监听状态
		let fetchOptions = {
			method: requestOptions.method, // *GET, POST, PUT, DELETE, etc.
			// mode: 'no-cors', // no-cors, *cors, same-origin
			cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'include', // include, *same-origin, omit
			headers: requestOptions.headers,
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer-when-downgrade' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		};
		if (requestOptions.method.toUpperCase() !== "GET" && requestOptions.method.toUpperCase() !== "HEAD") {
			fetchOptions.body = _data;
		}
 
		return fetch(_url, fetchOptions);
	},
 
	get: function (options) {
		options.method = "GET";
		return this.request(options);
	},
 
	post: function (options) {
		options.method = "POST";
		return this.request(options);
	},
 
	formatParams: function (data) {
		const arr = [];
		for (let name in data) {
			arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
		}
		return arr.join("&");
	},
 
	// 原则：如果有默认值，则使用默认值，否则使用传入的值。
	mergeOptions: function (targetOption, newOption) {
		if (!newOption) {
			return targetOption;
		}
		Object.keys(targetOption).forEach(function (key) {
			if (newOption[key] === undefined) {
				return;
			}
			targetOption[key] = newOption[key];
		});
		return targetOption;
	}
};