import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/demo/stateless_page.dart';
import 'package:flutter_douban/module/list/list_page.dart';
import 'package:flutter_douban/module/model/douban_model.dart';
import 'package:flutter_douban/module/widgets/display_item.dart';

class HomeListItem extends StatelessPage {
  final BuildContext context;
  final ListSort itemTitle;

  //初始化
  HomeListItem({Key key, this.context, this.itemTitle});

//点击更多事件
  void _onMoreTapped() {
    Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
      return ListPage(item: this.itemTitle);
    }));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 240,
      padding: EdgeInsets.only(left: 15),
      child: Column(
        children: [
          _configTitleItem(),
          Container(height: 10,),
          DisPlayItem()
        ],
      ),
    );
  }

  Widget _configTitleItem() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          AppModel.getListTitle(itemTitle),
          style: TextStyle(fontSize: 26, color: Colors.black),
        ),
        GestureDetector(
            onTap: _onMoreTapped,
            child: Padding(
              padding: EdgeInsets.only(right: 10),
              child: Text(
                '更多',
                style: TextStyle(fontSize: 14, color: Colors.green),
              ),
            ))
      ],
    );
  }
}
