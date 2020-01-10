import { decorate, observable, action, computed } from "mobx";
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

  BuildJson(payload){
      this.json = [{
        type: "container",
        id: 1,
        parentId: 0
        },
      ]
      this.recBuild(payload, 1)
  }

  recBuild(payload, id){
      if(payload.items.length === 0) return
      else {
          payload.items.forEach(item => {
              this.add(item.type, id)
              if(item.type === 'container') this.recBuild(item.items, id+1)
            })
        }
  }

  add(entity, parentId) {
    let json = this.json;
    json.push({
      type: entity,
      id: json.length+1,
      parentId: parentId
    });
    this.setJson(json);
  }

}
Store = decorate(Store, {
  json: observable,
  //jsonify: computed,
  add: action,
  buildJson: action,
});
export default new Store();
