//����gulp
var gulp=require("gulp");

//����webserver����
var webServer=require("gulp-webserver");

//��������
gulp.task("webServer",function(){
    gulp.src("./")//src�����gulpfile.js
        .pipe(webServer({//�����������Ϣ
            host:"localhost",
            port:80,//���ö˿�
            directoryListing:{
                enable:true,//��ʾĿ¼
                path:"./"//·��
            },
            livereload:true//�ļ�ͬ������
            

        }));
})
//����Ĭ��task
gulp.task("default",["webServer"]);//������д��������