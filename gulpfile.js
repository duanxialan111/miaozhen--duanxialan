//引入gulp
var gulp=require("gulp");

//引入webserver服务
var webServer=require("gulp-webserver");

//启动服务
gulp.task("webServer",function(){
    gulp.src("./")//src相对于gulpfile.js
        .pipe(webServer({//服务的配置信息
            host:"localhost",
            port:80,//配置端口
            directoryListing:{
                enable:true,//显示目录
                path:"./"//路径
            },
            livereload:true//文件同步更新
            

        }));
})
//设置默认task
gulp.task("default",["webServer"]);//将任务写在数组中