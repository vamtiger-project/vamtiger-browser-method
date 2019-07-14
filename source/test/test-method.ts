const { VamtigerBrowserMethod } = self;
const { method, environment } = VamtigerBrowserMethod;

method.test = (params: any = {}) => `test method result from ${environment}: params - \n${JSON.stringify(params)}`;