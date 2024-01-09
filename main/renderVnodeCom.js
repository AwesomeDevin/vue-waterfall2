import { defineComponent, createApp, nextTick } from 'vue'


let app = null

export default function getDomFromVNode(vNodes) {

  return new Promise((resolve, reject) => {
    const Com = defineComponent(
      () => {
        nextTick(() => {
          resolve(Array.from(container.childNodes).filter(item => {
            return item.nodeType !== 3 && item.data !== ''
          }))
        })
        return () => {
          return vNodes
        }
      }
    )

    const container = document.createElement('div')
    container.id = 'tmpApp'
    document.body.appendChild(container)
    if (app) {
      app.unmount()
    }
    app = createApp(Com)
    app.mount('#tmpApp')
    document.body.removeChild(container)


  })

}
