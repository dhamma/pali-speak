
import provident2syl from "./provident2syl";

const maxmatch=s=>{
    let i=s.length-1,eaten=1;
    let sub=s.substr(i),syl=provident2syl[sub];

    while (i>0) {
        i--;
        sub=s.substr(i);
        if (provident2syl[ sub]) {
            syl=provident2syl[ sub];
            eaten=sub.length;
        }
        
    }
    return [syl, eaten];
}
export const syllablify=str=>{
    let out=[];
    const tokens=str.split(/([^a-zA-Z])/);
    tokens.forEach(str=>{
        let i=str.length;
        const out2=[];
        while (i>0) {
            let [syl,adv]=maxmatch(str.substr(0,i));
            if (syl) {
                i-=adv;
                out2.unshift([syl,str.substr(i<0?0:i,adv)]);
                
            } else {
                out2.unshift('')
                i--;
            }
        }
        out=out.concat(out2)    
    })
    console.log(out)
    return out;
}