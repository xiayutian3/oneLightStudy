import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class RankItem extends StatelessWidget{
  final String title; //标题
  final int rank;  //蓝色星星的个数
  final double score; //评分
  final double width; //容器宽度
  final double height;
  final double startWidth; //评分星星的宽度

  RankItem({
    Key key,
    this.title,
    this.rank,
    this.score,
    this.width,
    this.height,
    this.startWidth,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: this.width,
      height: this.height,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween, //子项的对齐方式
        crossAxisAlignment: CrossAxisAlignment.start, //文字对齐方式，从哪边开始
        children: [
          Container(
            width: this.width,
            child: Text(
              this.title,  //可以直接使用 this.title  也可以 title
              style: TextStyle(fontSize: 12,color: Colors.black),
              softWrap: true,
              overflow: TextOverflow.ellipsis, //文字超出省略
            ),
          ),
          Container(
            width: this.width,
            height: 14,
            child: Row(
              children:[
                Expanded( //弹性布局
                  child: ListView.separated( //分割线列表
                  scrollDirection: Axis.horizontal, //水平排列
                    itemBuilder: (BuildContext context , int index){
                      if(index<rank){
                        return Image(
                          width: startWidth,  //可以使用 this.startWidth,也可以直接使用startWidth
                          height: startWidth,
                          image: AssetImage('lib/images/btn.jpg'),
                        );
                      }else{
                        return Image(
                          width: startWidth,
                          height: startWidth,
                          image: AssetImage('lib/images/btn.jpg'),
                        );
                      }
                    }, 
                    separatorBuilder: (BuildContext context,int index){
                      return Container(width: 2);
                    }, 
                    itemCount: 5
                  ),
                ),
                Text(
                  '$score',
                  style: TextStyle(fontSize: 10,color: Color(0xff999999)),
                )
              ]
            ),
          )

        ],
      ),
    );
  }
  
}