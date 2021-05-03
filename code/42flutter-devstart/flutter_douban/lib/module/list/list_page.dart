import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/model/douban_model.dart';
import 'package:flutter_douban/module/widgets/top_bar_page.dart';

class ListPage extends StatefulWidget{
  final ListSort item;  //final定义的变量 要在构造函数中初始化
  ListPage({  //构造函数简写形式
    Key key,
    this.item
  });
  @override
  _ListPageState createState() => _ListPageState();
  
}

//with 关键字，可以混入一些类的功能，不需要继承
class _ListPageState extends State<ListPage> with SingleTickerProviderStateMixin{

  TabController _tabController;

  //在生命周期初始化 页面一进入  _tabController
  @override
  void initState(){
    super.initState(); //调用父类构造函数
    // vsync  tickerProvider类型
    _tabController = TabController(
      length: AppModel.getTabList(widget.item).length,
      vsync: this
    );
    
  }

  @override
  Widget build(BuildContext context) {
    //获取传入的值
    print(123456);
    print(AppModel.getListTitle(widget.item));
    
    return TopBarPage(
      title: AppModel.getListTitle(widget.item),
      tabbar: _configTabbar(),
      body: TabBarView(
        controller: _tabController,
        children: _configTabBarViews(), //内容显示
      ),
    );
  }

  List<Widget> _configTabBarViews(){
    List<Widget> tablist = [];
    var getTabLists = AppModel.getTabList(widget.item);
    for(int i=0;i<getTabLists.length;i++){
      tablist.add(Text(getTabLists[i]));
    }
    print(tablist);
    return tablist;
  }


  Widget _configTabbar(){
    return TabBar(
      controller: _tabController,
      unselectedLabelColor: Colors.white,
      unselectedLabelStyle: TextStyle(fontSize: 18,fontWeight: FontWeight.normal),
      indicatorColor: Colors.white, //选中颜色
      indicatorSize: TabBarIndicatorSize.label, //选中的下划线大小
      labelStyle: TextStyle(fontSize: 18,fontWeight: FontWeight.bold),
      labelPadding: EdgeInsets.only(bottom:8), 
      tabs: _configTabs(),
    );
  }

  List<Widget> _configTabs(){
    List<Widget> tablist = [];
    var getTabLists = AppModel.getTabList(widget.item);
    for(int i=0;i<getTabLists.length;i++){
      tablist.add(Text(getTabLists[i]));
    }
    return tablist;
  }
  
}