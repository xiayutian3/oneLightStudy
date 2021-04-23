import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/home/home_page.dart';
import 'package:flutter_douban/module/user/user_page.dart';

class BotNavBar extends StatefulWidget{
  @override
  _BotNavBarState createState() => _BotNavBarState();
  
}

class _BotNavBarState extends State<BotNavBar>{
  //当前激活的导航数
  int _currentIndex = 0;
  //控制页面显示
  PageController _pageController = PageController();
  //页面切换的回调
  void _onPagechanged(int index){
    setState(() {
      _currentIndex = index;
    });
  }
  //导航切换的回调
  void _onItemTapped(int index){
    //页面动画  进入的页面 延迟时间  类似贝塞尔曲线动画
    _pageController.animateToPage(index, duration: const Duration(microseconds: 300), curve: Curves.ease);
  }
  
  @override
  Widget build(BuildContext context) {
    //脚手架
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: Icon(Icons.home),label: '首页'),
          BottomNavigationBarItem(icon: Icon(Icons.person),label: '我的'),
        ],
        currentIndex: _currentIndex,
        onTap: _onItemTapped,
      ),
      body: PageView(   // 页面显示
        children: <Widget>[
          HomePage(),
          UserPage()
        ],
        controller: _pageController, //控制页面的切换
        onPageChanged: _onPagechanged,//页面切换的回调
      ),
    );
  }

}