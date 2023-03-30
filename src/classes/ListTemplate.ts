import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  // When you delcare a properties type in the constructor there is not need to declare the type beofre hand, and also the assigns it value as the argument to a property.
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end' ){
    const li = document.createElement('li');

    const h4 = document.createElement('h4')
    h4.innerText = heading
    li.append(h4)

    const p = document.createElement('p')
    p.innerText = item.format()
    li.append(p)

    if(pos === 'start'){
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }
  }
}