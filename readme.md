### LeetCode刷题助手

该仓库是一个Chrome插件，主要用来辅助刷题，整个插件一共有两个功能，下面分别介绍

##### 功能一、每次打开LeetCode的时候会随机从自己收藏的题目里面抽取一道，作为LeetCode每日一题的补充，并展示在每日一题的上面

![image-20220825144156026](readme.assets/image-20220825144156026.png)

##### 功能二、给题目标上具体的难度分数，而不是使用三个等级（简单、中等、困难）

![image-20220825144408641](readme.assets/image-20220825144408641.png)

该功能依托于零神的一个项目，[传送门](https://github.com/zerotrac/leetcode_problem_rating)

**注意：这里有些题目没有分数，仍使用的是LeetCode本身就有的等级**

#### 使用方式

打开Chrome浏览器插件的开发者模式

![image-20220826090825873](readme.assets/image-20220826090825873.png)

<p align="center">图1 Chrome的插件管理界面</p>

将仓库下载到本地（使用git）

```shell
git clone https://github.com/karentwan/LeetCodeAssistant.git
```

然后将整个文件夹拖进图1所示的插件管理界面当中即可。

如有使用上的问题或者更好的建议，欢迎提issue.