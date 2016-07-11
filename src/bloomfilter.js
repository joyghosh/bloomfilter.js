/**
* Bloom filter.
* @author: Joy Ghosh
* @version: 1.0
*/

//Constants.
const BITS_IN_BYTE = 8;
const FALSE_POSITIVE_TOLERANCE = 0.000001;

/** 
* Bloom filter object. 
* n represents number of elements in this filter.
*/
var BloomFilter = function(n){
	this.m = Math.ceil((-2)*n*Math.log(FALSE_POSITIVE_TOLERANCE));				//Bits in Bloom filter.
	this.k = Math.ceil(0.7*(this.m/n));											//Number of hash functions.

	//Normalize size.
	this.size = (this.m > BITS_IN_BYTE) ? (Math.ceil(this.m/BITS_IN_BYTE)) : 1;		//default size is a byte.

	//Initialize bit array for filter.
	this.bitview = new BitView(new ArrayBuffer(this.size));
}

//Generate hash value.
BloomFilter.prototype.calculateHash = function(x,m,i){
	return ((fnv_1a(x) + (i*one_at_a_time_hash(x)))%m);							//Double hash technique.
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