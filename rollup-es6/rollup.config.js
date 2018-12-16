import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';

export default {
    input: './index.js',
    plugins: [
        resolve(),
        commonjs({
                extensions: ['.js']
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ],
    output: {
        file: 'bundle.min.js',
        format: 'iife'
    }
}
