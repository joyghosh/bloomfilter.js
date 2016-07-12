/** 
Fowler-Noll-Vo hash function.
@author: Joy Ghosh
@version: 1.0
*/

//FNV constants.
const FNV_PRIME = 16777619;
const FNV_OFFSET_BASIS = 2166136261;

/**
FNV hash function. (32-bit version)
FNV step 1: hash = hash XOR byte_of_data.
FNV step 2: hash = hash * FNV_Prime.
*/
function fnv_1a(value){
	
	var hash = FNV_OFFSET_BASIS;
	for(var i=0; i<value.length; ++i){
		
		//Extract the 2 octets of value i.e. 16 bits (2 bytes).
		var c = value.charCodeAt(i);	
		hash = fnv_xor(hash, c);
		hash = fnv_multiply(hash);
	}

	return hash >>> 0;
}

//FNV step 1:hash = hash XOR byte_of_data.
function fnv_xor(hash, byte_of_data){
	return (hash ^ byte_of_data);
}

//FNV step 2: hash = hash * FNV_Prime.
function fnv_multiply(hash){
	hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	return hash;
}

module.exports = fnv_1a;