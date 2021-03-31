var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')  
// var autoprefixer = require('autoprefixer-core')  //这个插件和 autoprefixer已经合并
var mqpacker = require('css-mqpacker') //css媒体查询提取出来，整合成一个，相同条件下
var csswring = require('csswring') //css压缩
var less = require('gulp-less')
var path = require('path')

gulp.task('default',function(){
  var processors = [
    autoprefixer({
      browsers:['last 2 version']
    }),
    mqpacker,
    csswring
  ]
  return gulp.src('./src/*.less')
  .pipe(less())
  .pipe(postcss(processors))
  .pipe(gulp.dest('./dist'))
})
