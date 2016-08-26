var app = angular.module('myApp', ['ngAnimate']);
	app.controller('myCtrl', function($scope,$http,$location) {
		 $http.get("../data.json")
		      .success(function(response) { //分页渲染
		            $scope.result=response;
		            $scope.counts=0;
		            $scope.pgCount=0;
		            for(var i=0;i<$scope.result.length;i++){
		            	$scope.pageArr=[];
		            	$scope.counts=$scope.result[i].template_type;//每页色块个数
						$scope.pgCount=Math.ceil(($scope.result[i].products.length)/$scope.counts);//页数
						for(var j=0;j<$scope.pgCount;j++){ 
					 		$scope.pageArr[j]=[];	
					 		for(var k=j*$scope.counts;k<=(j+1)*$scope.counts-1;k++){
					 			$scope.pageArr[j].push($scope.result[i].products[k]);
					 		}
					 	}
					 	for(var n =0;n<$scope.pageArr.length;n++){
							for(var m = 0;m<$scope.pageArr[n].length;m++){
								if(!$scope.pageArr[n][m]){
									$scope.pageArr[n][m]={
										summary:"请您期待"
									}
								}
							}
						}
					 	$scope.result[i].products=$scope.pageArr;
					 	console.log($scope.pageArr);	 		
		            }
		       })
		  //箭头
		 $scope.jtIndex=false;
		 $scope.pisIndex=false;
		 $scope.jtEvent=function(tabIndex){
		 	if(!$scope.jtIndex){
		 		$scope.jtIndex=true;
		 		$scope.pisIndex=true;
		 	}else{
		 		$scope.jtIndex=false
		 		$scope.pisIndex=false;
		 	}
		 	$(".product-type")
		 		.eq(tabIndex).addClass("cur-type").siblings().removeClass("cur-type");
		 }
		 //tab切换
		 $scope.tabEvent=function(tabIndex){
		 	$(".product-type")
		 		.eq(tabIndex).addClass("cur-type").siblings().removeClass("cur-type");
		 }
		 //点击分页
		 $scope.pageBtnFn=function(pageBtnIndex){
		 	$scope.ht=$(".product-pic").outerHeight();
		 	$("#pageNo span").eq(pageBtnIndex).addClass("curp").siblings().removeClass("curp");
		 	$("#scroll").animate({
				"margin-top":-$scope.ht*pageBtnIndex
			},1000);
		 }
		 

	})
	