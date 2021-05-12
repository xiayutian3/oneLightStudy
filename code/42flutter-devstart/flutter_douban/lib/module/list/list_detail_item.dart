import 'package:flutter/cupertino.dart';
import 'package:flutter_douban/module/widgets/rank_item.dart';

class ListDetailItem extends StatelessWidget{
  void _onItemTapped(){}

  @override
  Widget build(BuildContext context) {
    return GestureDetector( //点击事件wrap
      onTap: _onItemTapped,
      child: Container(
        padding: EdgeInsets.only(left:24,right: 24,top:9),
        child: Row(
          children:<Widget>[
            FadeInImage.assetNetwork(
              width: 86,
              height: 112,
              placeholder: 'lib/images/btn.jpg', 
              image: 'https://video.dsconsulting.com/dswebsite_2020/logo.png'
            ),
            Container(width: 14,),
            Column(children: [
              RankItem(title:'近期',width:220,height:40,rank:4,score:8.0),
              Container(height: 3,),
              Container(
                width: 220,
                child: Text(
                  '简介所开发的分为发你上课的飞对方的喝咖啡的v你本来都剋上雕刻技法地方卡夫卡国防科工局鸟时代v吗，的v南方基地',
                  style: TextStyle(
                    fontSize: 10,
                    color: Color(0xff999999)
                  ),
                  maxLines: 2, //最大行数
                  softWrap: true, //文本折断
                  overflow: TextOverflow.ellipsis, //显示省略号
                ),
              )
            ],)
          ]
        ),
      ),
    );
  }
  
}