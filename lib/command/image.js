cmd.on('pinterest',['pinterest'],['image','search'],async(msg,{query,client})=> {
let res = await functions.searchImage(`${query} Pinterest`)
res = res.filter(tr => tr.url.includes('pinimg'))
if (res.length < 1) return client.reply(msg,'Image Yang Anda Cari Tidak Di Temukan:(')
let random = functions.randomize(res)
return client.sendButton(msg.from,(await client.getBuffer(random.url)).buffer,'imageMessage',[{id:`.pinterest ${query}`,text:'Get Again'}],{caption:functions.parseResult(random,{title:'Pinterest Image'}),footer:botinfo.footerText}).catch(e => client.reply(msg,`Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`))
},{wait:true,query:`Masukkan Query Anda Untuk Info Ketik .pinterest --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Pinterest'})

cmd.on('alphacoders',['alphacoders'],['image','search'],async(msg,{query,client})=> {
return client.sendButton(msg.from,(await client.getBuffer(botinfo.linkApi.zacros+"/search/alphacoders?query="+query)).buffer,'imageMessage',[{id:`.alphacoders ${query}`,text:'Get Again'}],{caption:functions.parseResult({title:'Alphacoders Search'}),footer:botinfo.footerText})
},{wait:true,query:`Masukkan Query Anda Untuk Info Ketik .alphacoders --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Alphacoders'})

cmd.on('wallpapercave',['wallpapercave'],['image','search'],async(msg,{query,client})=> {
return client.sendButton(msg.from,(await client.getBuffer(botinfo.linkApi.zacros+"/search/wallpapercave?query="+query)).buffer,'imageMessage',[{id:`.wallpapercave ${query}`,text:'Get Again'}],{caption:functions.parseResult({title:'Wallpaper Cave Search'}),footer:botinfo.footerText})
},{wait:true,query:`Masukkan Query Anda Untuk Info Ketik .wallpapercave --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Wallpapercave'})

cmd.on('googleimage',['gimage','googleimage','searchimage'],['image','search'],async(msg,{query,client,command})=> {
let res = await functions.searchImage(`${query}`)
if (res.length < 1) return client.reply(msg,'Hasil Di Google Tidak Di Temukan:(')
let random = functions.randomize(res)
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(random.url)).buffer,'imageMessage',{quoted:msg,caption:functions.parseResult(random,{title:command})}).catch(e => client.reply(msg,`Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`))
},{query:`* Masukkan Query Anda Untuk Info Ketik .gimage --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Google'})

cmd.on('wallpaperflare',['wallpaper','gambarhd'],['image','search'],async(msg,{query,client})=> {
let res = await functions.searchImage(`${query} Wallpaper flare`)
res = res.filter(tr => tr.width > 700 && tr.height > 600)
if (res.length < 1) return client.reply(msg,'Image Yang Anda Cari Tidak Di Temukan:(')
let random = functions.randomize(res)
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(random.url)).buffer,'imageMessage',{quoted:msg,caption:functions.parseResult(random,{title:'Wallpaper Image'})}).catch(e => client.reply(msg,`Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`))
},{query:`Masukkan Query Anda Untuk Info Ketik .wallpaper --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Wallpaper'})

cmd.on('pixiv',['pixiv'],['image','search'],async(msg,{query,client})=> {
let res = await functions.searchImage(`${query} Pixiv`)
res = res.filter(tr => tr.url.includes('pximg.net'))
if (res.length < 1) return client.reply(msg,'Hasil Di Pixiv Tidak Di Temukan:(')
let random = functions.randomize(res)
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(random.url)).buffer,'imageMessage',{quoted:msg,caption:functions.parseResult(random,{title:'Pixiv Image'})}).catch(e => client.reply(msg,`Terjadi Kesalahan Dalam Mengirim Media, ${random.url} `))
},{query:`Masukkan Query Anda Untuk Info Ketik .pixiv --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Pixiv'})

cmd.on('vector',['vector','vectorstock'],['image','search'],async(msg,{query,client})=> {
let res = await functions.searchImage(`${query} VectorStock`)
res = res.filter(tr => tr.url.includes('vectorstock'))
if (res.length < 1) return client.reply(msg,'Hasil Di VectorStock Tidak Di Temukan:(')
let random = functions.randomize(res)
await client.reply({key:{fromMe:false,remoteJid:msg.from},message:{videoMessage:{viewOnce:true}},participant:'0@s.whatsapp.net'},'Loading...')
return client.sendMessage(msg.from,(await client.getBuffer(random.url)).buffer,'imageMessage',{quoted:msg,caption:functions.parseResult(random,{title:'Vector Stock Image'})}).catch(e => client.reply(msg,`Terjadi Kesalahan Dalam Mengirim Media, ${random.url}`))
},{query:`Masukan Query Anda Untuk Info Ketik .vector --info`,param:`${functions.needed('query')}`,info:'Mencarikan Foto Di Vector Stock'})

cmd.on('milf',['milf'],['image','random'],async(msg,{query,client}) => {
return client.sendImage(msg.from, botinfo.linkApi.zacros+"/randomimg/milf")
});

cmd.on('waifu',['waifu'],['image','random'],async(msg,{query,client}) => {
return client.sendImage(msg.from, botinfo.linkApi.zacros+"/randomimg/waifu")
});

cmd.on('husbu',['husbu'],['image','random'],async(msg,{query,client}) => {
return client.sendImage(msg.from, botinfo.linkApi.zacros+"/randomimg/husbu")
});

cmd.on('cosplay',['cosplay'],['image','random'],async(msg,{query,client}) => {
return client.sendImage(msg.from, botinfo.linkApi.zacros+"/randomimg/cosplay")
});
