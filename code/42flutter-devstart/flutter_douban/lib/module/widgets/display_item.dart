import 'package:flutter/cupertino.dart';
import 'package:flutter_douban/module/widgets/rank_item.dart';
import 'package:flutter_douban/util/app_util.dart';

class DisPlayItem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Expanded(
        //弹性布局
        child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemBuilder: _buildItem,
            separatorBuilder: (BuildContext context, int index) {
              return Container(
                width: (AppUtil.screenWidth - 4 * 80 - 10 - 15) / 3,
              );
            },
            itemCount: 4));
  }

  Widget _buildItem(BuildContext context,int index) {
    return GestureDetector(  //点击容器
      onTap: (){},
      child: Column(
        children: [
          FadeInImage.assetNetwork(  //网络图片加载显示不出，显示本地图片
            width: 80,
            height: 112,
            placeholder: 'lib/images/btn.jpg', 
            image: 'https://video.dsconsulting.com/dswebsite_2020/logo.png'
          ),
          Container(
            height: 10,
          ),
          RankItem()  // 评分组件
        ],
      ),
    );
  }
}
