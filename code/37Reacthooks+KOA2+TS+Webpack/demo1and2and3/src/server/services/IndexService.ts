//接口注入的文件，做数据调用

class IndexService{
  getData(){
    return Promise.resolve("hello world 我是后台api")
  }
}

export default IndexService