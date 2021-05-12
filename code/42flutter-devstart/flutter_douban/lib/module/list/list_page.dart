import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/list/list_detail_item.dart';
import 'package:flutter_douban/module/model/douban_model.dart';
import 'package:flutter_douban/module/widgets/top_bar_page.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

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

  //上拉刷新
  RefreshController _refreshController = RefreshController(initialRefresh: false);


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

//加载数据的回调函数
  int itemCount = 10;
  void _onLoading(){
    //模拟请求数据 2s后返回
    Future.delayed(Duration(seconds: 2),(){ 
      itemCount += 5;
      _refreshController.loadComplete(); //通知加载完成
      setState(() { //刷新页面
        
      });
    });

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
    for(int i=0;i<getTabLists.length;i++){ //循环list title，给对应的title 添加对应的页面内容
      // tablist.add(Text(getTabLists[i]));
      tablist.add(_configItemList());
    }
    print(tablist);
    return tablist;
  }

  Widget _configItemList(){
    return SmartRefresher(
      enablePullDown: false,
      enablePullUp: true,
      controller: _refreshController, //控制器
      onLoading: _onLoading, //回调
      footer: CustomFooter(
        builder: (BuildContext context, LoadStatus mode){
          Widget body;
          if(mode == LoadStatus.idle){ //加载完成
            return Container();
          }else if(mode == LoadStatus.loading){ //正在加载
            return CupertinoActivityIndicator();
          }else if(mode == LoadStatus.failed){ //加载失败
            body = Text('加载失败');
          }else if(mode == LoadStatus.canLoading){ //准备加载
            body = Text('准备加载');
          }else{
            body = Text('没有更多数据');
          }

          return Container(
            height: 55,
            child: Center( //居中布局
              child:body
            ),
          );
        },
      ),
      child: ListView.separated(
        itemBuilder: _buildItem,
         separatorBuilder: (BuildContext context,int index){
           return Container(height: 21,);
         }, 
         itemCount: itemCount
      ),
    );
  }

  Widget _buildItem(BuildContext context,int index){
    return ListDetailItem();
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