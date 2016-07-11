/** 
Jenkins one_at_a_time hash function.
@author: Joy Ghosh
@version: 1.1
*/

/**
* Jenkins's one at a time hash function.
*/
function one_at_a_time_hash(key){
	
	var hash = 0;
	for(var i=0;i<key.length;i++){
		hash += key.charCodeAt(i);
		hash += (hash << 10);
		hash = hash ^ (hash >> 6);
	}

	hash += (hash << 3);
	hash = hash ^ (hash >> 11);
	hash += (hash << 15);
	return hash;
}