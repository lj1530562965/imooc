import './css/common.css'
import Layer from './components/layer/layer.js'
const App = function () {
    var dom = document.getElementById('app')
    var Layers = new Layer()
    dom.innerHTML = Layers.tpl({
        name: 'jhon',
        arr: ['apple','xiaomi','oppo']
    })
}
new App()