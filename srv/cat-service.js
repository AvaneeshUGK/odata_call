const cds = require("@sap/cds");
const cfenv = require("cfenv");

module.exports = cds.service.impl(async function (){debugger

    const {Books} = this.entities;
    this.on("READ",Books, async (req)=>{

        let AribaSrv = await cds.connect.to("ARIBA_DEV")
        console.log("hello");
        let resultOdata = await AribaSrv.tx(req).get("/opu/odata/sap/ZOD_ARB_VENDORDUP_CHK_SRV/ZFIM_SUPP_DUPLICATE_CHECK?Name=%27AB%27&Country=%27IN%27&Tax_Code=%2709AAFCC9473R1ZN%27&$format=json")
        // let resArb = await AribaSrv.send({
        //     query:'GET /opu/odata/sap/ZOD_ARB_VENDORDUP_CHK_SRV/ZFIM_SUPP_DUPLICATE_CHECK?Name=%27AB%27&Country=%27IN%27&Tax_Code=%2709AAFCC9473R1ZN%27&$format=json'
        // });
        let reqobj = new XMLHttpRequest();
        console.log("data_here");
        console.log(resultOdata);
        console.log(resultOdata[0].COMMENT)

    });


});