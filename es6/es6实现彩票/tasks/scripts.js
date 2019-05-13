import gulp from 'gulp';
import gulpif from 'gulp-fi';
import concat from 'gulp-concat';
import webpack from 'webpack';
import webpackstream from 'webpack-stream';
import names from 'vinyl-named';
import liverload from 'liver-load';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglufy';
import {log,colors} from 'gulp-util';
import args from 'g./util/args'

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js']
    .pipe(plumber({
        errorHandler:function(){}
    })))
    .pipe(name())
    .pipe(gulpwebpack({
        module:{
            loader:[{
                test:/\.js$/,
                loader:'babel'
            }]
        }
    }),null,(err,state)=>{
        log(`Finshed '${colors.cyan('scripts')}`,stats.toString({
            chunks:false
        }))
    })
    .pipe(gulp.dest('server/piblic/js'))
    .pipe(rename({
        basename:'cp',
        extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote-keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
