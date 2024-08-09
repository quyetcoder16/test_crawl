import { Builder, By } from 'selenium-webdriver';

const crawlData = async (url, imgXpath, spanXpath) => {
    const data = {
        GiaWeb: "",
        LinkHinhAnh: ""
    }
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);

        let imgElement = await driver.findElement(By.xpath(imgXpath));

        data.LinkHinhAnh = await imgElement.getAttribute('src');

        let spanElement = await driver.findElement(By.xpath(spanXpath));
        data.GiaWeb = await spanElement.getText();

    } finally {
        await driver.quit();
    }
    return data;
};

const data = await crawlData(
    'https://www2.hm.com/en_gb/productpage.1087737001.html',
    '/html/body/div[1]/div[2]/div[1]/div/div/div[1]/div/ul/li[1]/button/div/span/img',
    '/html/body/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/span[1]'
)

console.log(data);