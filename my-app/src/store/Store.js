import { decorate, observable, action } from "mobx";

class Store {
  json = [
    {
      type: "container",
      id: 1,
      parentId: 0
    }
  ];

  setJson(payload) {
    this.json = payload;
  }

  add(entity, parentId, color = 'orange') {
    let json = this.json;
    json.push({
      type: entity,
      id: json.length+1,
      parentId: parentId,
      color: color,
    });
    this.setJson(json);
  }

  buildJson(payload){
    this.json = [{
      type: "container",
      id: 1,
      parentId: 0
      },
    ]
    this.recBuild(payload.items, 1)
  }

  recBuild(payload, id){
    if(payload.length === 0) return
    else {
        payload.forEach(item => {
            this.add(item.type, id)
            if(item.type === 'container') this.recBuild(item.items, this.json.length)
          })
      }
  }

  createJson(){
    //console.log(this.foo(1))
    return JSON.stringify(this.helpCreateJson(1))
  }

  helpCreateJson(id){
    let children = this.findChildren(id)
    if(children.length === 0){
      let node = this.json.filter(item => item.id === id)
      return node[0].type === 'container' ? {type: node[0].type, items: []} : {type: node[0].type, color: node[0].color || 'orange'}
    }
    else{
      return {
        type: 'container',
        items: children.map(item => { return this.helpCreateJson(item.id) } )
      }
    }
  }


  findChildren(id){
    return this.json.filter( item => item.parentId === id )
  }

}

Store = decorate( Store, {
  json: observable,
  add: action,
  buildJson: action,
  createJson: action,
});

export default new Store();
