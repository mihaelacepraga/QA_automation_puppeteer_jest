const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

describe('Visual Regression Testing', () => {
    let browser
    let page

    beforeAll(async function() {
        browser = await puppeteer.launch({
            headless: false,
            args: ['--start-maximized'],
        })
        page = await browser.newPage()
        await page.setViewport({ width: 1536, height: 713})
    })

    afterAll(async function() {
        await browser.close()
    })
    // FULL PAGE 
    test('Full Page Snapshot', async function() {
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        const image = await page.screenshot()
        expect(image).toMatchImageSnapshot()

    })
  
    test('MOBILE DEVICES SNAPSHOT', async function() {
        const galaxy = puppeteer.KnownDevices['Galaxy S9+']
        await page.emulate(galaxy)
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        const image2 = await page.screenshot()
        expect(image2).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.1,
            })
    })
    test('Remove Element Before Snapshot', async function() {
        await page.goto('https://www.example.com')
        await page.evaluate(() => {
            ;(document.querySelectorAll('h1') || []).forEach(el => el.remove())
        })
    })

})