var gulp = require('gulp');

gulp.task(printHello);
gulp.task('default', defaultSomeTask);


function copy(done) {
    gulp.src('./scss/style.scss')
        .pipe(gulp.dest('./css/'));

    done();
}

gulp.task(copy);


















// function defaultSomeTask(done) {
//     console.log("All is working!");
//     done();
// }
//
// // exports.default = defaultSomeTask;
//
//
// function printHello(done) {
//     console.log("Hello World!");
//     done();
// }

// exports.printHello = printHello;