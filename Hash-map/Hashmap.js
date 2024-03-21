function hash(key, maxStorage) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % maxStorage;
    }
 
    return hashCode;
  } 

class HashMap {
    constructor() {
        this.storage = [];
        this.maxStorage = 16;
        this.storage = new Array();
            for (let i = 0; i < this.maxStorage; i++) {
            this.storage[i] = [];
            }
        this.loadFactor = 0.70;
        this.nodes = 0;
        }


calculateStorage() {
    if(this.nodes / this.maxStorage >= this.loadFactor) {
        this.maxStorage *= 1.75;
        let oldStorage = this.storage;
        this.storage = new Array()
            for(let i=0 ; i<this.maxStorage; i++) {
                this.storage[i] = []
            }
        this.nodes = 0;

        oldStorage.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    const newIndex = hash(key, this.maxStorage); 
                    this.storage[newIndex].push([key, value]); 
                    this.nodes++; 
                });
            }
        });
    }}

set(key, value) {
    let index = hash(key, this.maxStorage)
    if(this.storage[index] === undefined || this.storage[index][0] === undefined) {
        this.storage[index].push([key, value]);
        this.nodes++
    }

    else {
        let itExists = false;
        //FIX THISSSSSSSSS
        for(let i = 0; i < this.storage[index].length; i++) {
            if(this.storage[index][i][0] === key) {
                console.log("THIS KEY EXISTS ALREADY");
                this.storage[index][i][1] = value;
                itExists = true;
                break;
            }
        else {
            this.storage[index].push([key, value])
            this.nodes++
        }

    }
    this.calculateStorage();
}}


get(key) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i] && this.storage[i][0] === key) {
            console.log(key + " has value " + this.storage[i][1])
            return this.storage[i][1];
        }
    }
    console.log("key not found");
    return null;
}

has(key) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i] && this.storage[i][0] === key) {
            console.log("true")
            return true
        }

    }
    console.log("false");
    return false;
    
}

remove(key) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i] && this.storage[i][0] === key) {
            this.storage[i].splice(0,2);
            this.nodes--;
            return true
        }

    }
    return false;
    
}

length() {
    console.log("max storage : " + this.maxStorage)
    console.log("number of stored keys : " + this.nodes)
}

clear() {
    this.storage.splice(0, this.storage.length);
}

keys() {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i]) {
            console.log("key in index " + i + ": " + this.storage[i][0] )
        }
    }

}

values() {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i]) {
            console.log("value in index" + i + ": " + this.storage[i][1] )
        }
    }

}

entries() {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i]) {
            console.log(this.storage[i])
        }
       
    }

}

}

const hashMap = new HashMap();

hashMap.set("Dyan", "Beautiful Girl");
hashMap.set("Iris", "Beautiful Gurl");
hashMap.set("Lana", "Beautiful Cat");
hashMap.set("rosa", "Beautiful Girl");
hashMap.set("Nepali dog", "Beautiful dog")

hashMap.length();
hashMap.keys();
hashMap.values();
hashMap.set("Iris", "Age 26");
hashMap.get("Iris");
hashMap.length();
hashMap.entries();