# bloomfilter.js
Bloom filter is a space efficient probablistic data-structure. This implementation relies on following non-cryptographic hash functions.
- Fowler–Noll–Vo hash function.
- Jenkins hash function.

### Installation

```sh
$ npm install bloomfilter.js
```

### Usage

```sh
var bloom = require('bloomfilter.js');

#constructor-arg value: probable number of elements in the filter.
var filter = new bloom(100);

filter.add("test-data 1");
filter.add("test-data 2");

console.log(filter.test("test-data 3"));	#false		
console.log(filter.test("test-data 4"));	#false
console.log(filter.test("test-data 1"));	#true
console.log(filter.test("test-data 2"));	#true
```

#	References

* [Bloom filter](https://en.wikipedia.org/wiki/Bloom_filter)
* [Fowler-Noll-Vo wikipedia](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash)
* [Jenkins Hash wikipedia](https://en.wikipedia.org/wiki/Jenkins_hash_function)

# License

The MIT License (MIT)

Copyright (c) 2016 Joy Ghosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.