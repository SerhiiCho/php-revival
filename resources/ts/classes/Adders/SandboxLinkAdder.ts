import conf from '../../conf'
import AdderInterface from './AdderInterface'

export default class implements AdderInterface {
    public injectContent(): void {
        const target = document.querySelector(conf.selectors.targetForHomeLinks)
        const html = `
            <p class="panel" style="margin: 4px">
                <a href="${conf.urls.phpSandbox}" target="_blank">
                    <img src="${conf.urls.server}images/icons/sandbox.png" height="30">
                </a>
            </p>
        `

        if (!target)
            return

        target.insertAdjacentHTML('afterend', html)
    }
}