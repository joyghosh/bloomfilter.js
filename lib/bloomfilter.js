/**
* Bloom filter.
* @author: Joy Ghosh
* @version: 0.0.1
*/

var BitView = require('./bitview.js');
var fnv_1a = require('./fnv.js');
var one_at_a_time_hash = require('./jenkins.js');

//Constants.
const BITS_IN_BYTE = 8;
const FALSE_POSITIVE_TOLERANCE = 0.000001;

/**
* Bloom filter object.
* n represents number of elements in this filter.
*/
var BloomFilter = function(n, false_postive_tolerance = FALSE_POSITIVE_TOLERANCE){
	//Bits in Bloom filter.
	this.m = Math.ceil((-2)*n*Math.log(false_postive_tolerance));
	//Number of hash functions.
	this.k = Math.ceil(0.7*(this.m/n));

	//Normalize size.
	this.size = (this.m > BITS_IN_BYTE) ? (Math.ceil(this.m/BITS_IN_BYTE)) : 1;		//default size is a byte.

	//Initialize bit array for filter.
	this.bitview = new BitView(new ArrayBuffer(this.size));
}

//Generate hash value.
BloomFilter.prototype.calculateHash = function(x,m,i){
	//Double hash technique.
	return ((fnv_1a(x) + (i*one_at_a_time_hash(x)))%m);
}

//Looks for membership.
BloomFilter.prototype.test = function(data){
	var hash = data;
	for(var i=0; i<this.k; i++){
		hash = this.calculateHash(hash, this.m, i);
		if(!this.bitview.get(hash)){
			return false;
		}
	}
	return true;
}

//Adds data to filter.
BloomFilter.prototype.add = function(data){

	var hash = data;
	for(var i=0; i<this.k; i++){
		hash = this.calculateHash(hash, this.m, i);
		this.bitview.set(hash);
	}
}

//For visualization. Return the bitview's length.
BloomFilter.prototype.bytelength = function(){
	return this.bitview.length();
}

//Return the bitview object.
BloomFilter.prototype.view = function(){
	return this.bitview.view();
}

//Return a serialized object.
BloomFilter.prototype.serialize = function(){
	return JSON.stringify(this);
}

//deserialize from json.
BloomFilter.deserialize = function(serialized){
	var data = JSON.parse(serialized);
	var filter = new BloomFilter();
	filter.m = data.m;
	filter.k = data.k;
	filter.size = data.size;
	filter.bitview = new BitView();
	filter.bitview.buffer = data.bitview.buffer;
	filter.bitview.unit8 = data.bitview.unit8;
	return filter;
}

module.exports = BloomFilter;
