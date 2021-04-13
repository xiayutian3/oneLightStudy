//接口注入的文件，做数据调用

class IndexService{
  getData(){
    return Promise.resolve("我是lserver文件")
  }
}

export default IndexService