package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)
func main(){
	gin.SetMode(gin.DebugMode) //全局设置环境，此为开发环境，线上环境为gin.ReleaseMode
	router := gin.Default()    //获得路由实例

	//指定静态目录
	router.Static("/", "./")
	//监听端口
	http.ListenAndServe(":8080", router)
}
