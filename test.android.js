describe('Android Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should display welcome message', async () => {
        await expect(element(by.text('Welcome'))).toBeVisible();
    });
});