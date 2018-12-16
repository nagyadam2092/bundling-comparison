import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: './index.ts',
    plugins: [
        typescript({module: 'CommonJS'}),
        commonjs({extensions: ['.js', '.ts']}),
        resolve({ jsnext: true }),
        uglify()
    ],
    output: {
        file: 'bundle.min.js',
        format: 'iife',
        name: 'liQ'
    }
}
