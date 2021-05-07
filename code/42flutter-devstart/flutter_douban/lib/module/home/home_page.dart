import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/demo/event_page.dart';
import 'package:flutter_douban/module/demo/future_page.dart';
import 'package:flutter_douban/module/home/home_list_item.dart';
import 'package:flutter_douban/module/list/list_page.dart';
import 'package:flutter_douban/module/model/douban_model.dart';
import 'package:flutter_douban/module/user/user_page.dart';
import 'package:flutter_douban/module/widgets/search_input.dart';
import 'package:flutter_douban/module/widgets/top_bar_page.dart';
import 'package:flutter_douban/util/app_util.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  void _onSearchBlockClick() {
    //不带参数的跳转
    // Navigator.pushNamed(context, '/search');
    // 
    // 带参数的跳转
    Navigator.push(context, MaterialPageRoute(builder: (BuildContext context){
      // return ListPage(item:ListSort.Movie);

      // return UserPage(); //个人中心
      // return FuturePage(); //异步组件
      return EventPage();  //事件响应
    }));
  }

  @override
  Widget build(BuildContext context) {
    return TopBarPage(
      body: Stack(
        //层叠布局
        children: <Widget>[
          Container(),
          // 一个top 一个bottom
          _configTopBarWidget(),
          _configListVieWidget()
        ],
      ),
    );
  }

  Widget _configTopBarWidget() {
    return Container(
      height: 170,
      color: Color(0xff33c9ff),
      child: SafeArea(
        //安全距离
        child: Container(
          height: 52,
          alignment: Alignment.center,
          padding: EdgeInsets.only(top: 20, right: 20, left: 15),
          child: _configSearchBox(),
        ),
      ),
    );
  }

  Widget _configSearchBox() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        GestureDetector(
          behavior: HitTestBehavior.opaque, //点击空白区域也生效
          onTap: _onSearchBlockClick,
          child: SearchInput(
            isEnable: false,
          ),
        ),
        Image(
          width: 16,
          height: 16,
          image: AssetImage('lib/images/btn.jpg'),
        )
      ],
    );
  }

  Widget _configListVieWidget() {
    return Positioned(
      top: 130,
      child: Container(
        width: AppUtil.screenWidth,
        height: AppUtil.screenHeight-102,
        // color: Colors.red,
        child: ListView(  //首页列表展示
          children: [
            HomeListItem(
              context:context,
              itemTitle:ListSort.Movie
            ),
            HomeListItem(
              context:context,
              itemTitle:ListSort.Book
            ),
            HomeListItem(
              context:context,
              itemTitle:ListSort.Music
            ),
          ],
        ),
      ),
    );
  }
}
