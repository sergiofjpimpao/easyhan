; --

clk=s(2.0mm)+s(2.0ss)

if cnt==99 {
wtd+=1
}

if wtd==1 {
old=clk
}

if wtd==300 {
wtd=0
;
if old==clk {
=>Publish2 HAN/%EB%/WTD %tstamp%
=>BackLog Delay 50; Restart -3
}
;
}

; --
