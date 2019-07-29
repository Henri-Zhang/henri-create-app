## [APM](http://cms.9nali.com/mermaid/apm-mirror/)
### Application Performance Management （应用性能管理平台）

---
## 使用框架
* [dva](https://dvajs.com/)
* [umi](https://umijs.org/)

## 分支管理
* **APM第一期** 记录项目一期代码，冻结分支。
* **dev** 开发分支，测试环境。
* **release** uat环境，暂未启用。
* **master** 线上环境。
* **hotfix** 线上紧急修复分析。

日常开发从dev新建分支，完成后合并到dev，并及时删除远程分析。

---

## 提交规范

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

参照Angular的commit规范。