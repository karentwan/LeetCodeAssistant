

//String类型添加占位符功能
String.prototype.format = function(args){
    if (arguments.length > 0){
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object"){
            for (var key in args){
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        }else{
            for (var i = 0; i < arguments.length; i++){
                if (arguments[i] == undefined){
                    return "";
                }
                else{
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    }
    else{
        return this;
    }
}


function appendProblem(collectObj) {
    // submitObj可以获取最近的提交记录, 后续可以根据这些提交记录要获取题目, 比如获取最久提交的
    var privateFavorites = collectObj.favorites.private_favorites;
    var questions = new Array();
    var cnt = 0;
    for(var i = 0; i < privateFavorites.length; i++) {
        var lv1 = privateFavorites[i].questions;
        for (var j = 0; j < lv1.length; j++) {
            questions[cnt] = lv1[j];
            cnt++;
        }
    }
    // console.log("所有的收藏题目:");
    // console.log(questions);
    if (questions.length == 0 ) return;
    var idx = Math.floor(Math.random() * (questions.length+1));
    var question = questions[idx];
    console.log("随机抽取到的题目为:");
    console.log(question);
    if (question == undefined) return;
    var url = "/problems/" + question.title_slug;
    var title = question.title;
    // 获取一个题目
    var html = '<div class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4" role="row" style="display: flex; flex: 1 0 auto; min-width: 0px;">\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px;">\
                        <svg class="h-[18px] w-[18px] text-gray-5 dark:text-dark-gray-5" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\
                            <path clip-rule="evenodd" d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill-rule="evenodd"/>\
                        </svg>\
                    </div>\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px;">\
                        <div class="max-w-[302px] flex items-center">\
                            <div class="overflow-hidden">\
                                <div class="flex items-center">\
                                    <div class="truncate overflow-hidden">\
                                        <a class="h-5 hover:text-primary-s dark:hover:text-dark-primary-s" href="{0}">{1}</a>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px;">\
                        <svg class="h-[18px] w-[18px] text-gray-5 dark:text-dark-gray-5" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\
                            <path clip-rule="evenodd" d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill-rule="evenodd"/>\
                        </svg>\
                    </div>\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px;">\
                        <svg class="h-[18px] w-[18px] text-gray-5 dark:text-dark-gray-5" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\
                            <path clip-rule="evenodd" d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill-rule="evenodd"/>\
                        </svg>\
                    </div>\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px;">\
                        <svg class="h-[18px] w-[18px] text-gray-5 dark:text-dark-gray-5" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\
                            <path clip-rule="evenodd" d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill-rule="evenodd"/>\
                        </svg>\
                    </div>\
                    <div class="mx-2 py-[11px]" role="cell" style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px;">\
                        <div class="w-fill flex h-full flex-row items-center">\
                            <span class="h-2 flex-1 rounded-l-lg bg-fill-3 dark:bg-dark-fill-3"></span>\
                            <div>\
                                <svg class="flex-0 -mt-1.5 h-5 w-5 text-gray-5 dark:text-gray-7" fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">\
                                    <path clip-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" fill-rule="evenodd"/>\
                                </svg>\
                            </div>\
                            <span class="h-2 flex-1 rounded-r-lg bg-fill-3 dark:bg-dark-fill-3"/>\
                        </div>\
                    </div>\
                </div>'.format(url, title);
    $('*[role=rowgroup]').prepend(html);
}

// 获取所有收藏的题目
$.getJSON('https://leetcode.cn/list/api/questions', function(resp) {
    appendProblem(resp);
});



// 获取最近提交的题目
// params = {
//     "operationName": "userProfileQuestions",
//     "query": "query userProfileQuestions($status: StatusFilterEnum!, $skip: Int!, $first: Int!, $sortField: SortFieldEnum!, $sortOrder: SortingOrderEnum!, $keyword: String, $difficulty: [DifficultyEnum!]) {\n  userProfileQuestions(status: $status, skip: $skip, first: $first, sortField: $sortField, sortOrder: $sortOrder, keyword: $keyword, difficulty: $difficulty) {\n    totalNum\n    questions {\n      translatedTitle\n      frontendId\n      titleSlug\n      title\n      difficulty\n      lastSubmittedAt\n      numSubmitted\n      lastSubmissionSrc {\n        sourceType\n        ... on SubmissionSrcLeetbookNode {\n          slug\n          title\n          pageId\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
//     "variables": {
//         "status": "ACCEPTED",
//         "difficulty": [],
//         "first": 2000,
//         "skip": 0,
//         "sortField": "LAST_SUBMITTED_AT",
//         "sortOrder": "DESCENDING"
//     }
// }
// $.post({
//     url: 'https://leetcode.cn/graphql/',
//     data: JSON.stringify(params),
//     contentType: 'application/json'
// }).done(function(resp) {
//     // console.log("提交记录请求返回结果:")
//     // console.log(resp);
//     if (collectObj != undefined) {
//         // console.log("submit 开始处理...");
//         appendProblem(collectObj, resp);
//     } else {
//         submitObj = resp;
//     }
// });