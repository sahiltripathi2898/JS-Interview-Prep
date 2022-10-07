class LRUCache {
  constructor(size) {
    this.size = size
    this.map = new Map()
  }
  get(key) {
    if (this.map.has(key)) {
      let itemValue = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, itemValue)
    }
    return 'Key not present'
  }
  set (key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    else if (this.map.size === this.size) {
      // delete the first entry 
      this.map.delete(this.map.keys().next().value)
    }
    this.map.set(key,value)
  }
}

let cache = new LRUCache(3)

cache.set('name', 'sahil')
cache.set('title', 'tripathi')
cache.set('age', '23')
cache.set('name', 'sahil')
cache.set('city', 'lucknow')
console.log(cache.map)