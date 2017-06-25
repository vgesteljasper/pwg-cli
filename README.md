# pwg-cli

command line tool for the [pwg](https://github.com/vgesteljasper/pwg) package

## Installation

install with yarn:

```Shell
$ yarn global add pwg-cli
```

or with npm:

```Shell
$ npm install -g pwg-cli
```

## Options

parameter | default | description
--- | --- | ---
**-l**, --length | 20 | **length** of the password to be generated
**-d**, --digits | 0 | amount of **digits** for the password
**-s**, --symbols | 0 | amount of **symbols** for the password
**-a**, --amount | 3 | **amount** of passwords to generate

## Examples

### return 3 passwords, default options

```Shell
# the following is equal to `$ pwd -a 3 -l 30 -d 0 -s 0`
$ pwd

# result:
# xHwwMJMKItsuHopqLxKn
# yvFJtLyBxzBHBxHCDIFq
# zxyFAJBKsDoDELpGrDMF
```

### return 1 password, default options

```Shell
$ pwd -a 1

# result:
# MvCFxEItyrnoLIGuurKJ
```

### return 10 passwords, 30 characters long, 10 digits, 10 symbols

```Shell
$ pwd -a 10 -l 30 -d 10 -s 10

# result:
# 27}05>;)v8Gvzq*95+.LJM<nI}=222
# 1qn6qF1Iw+33*=n7-[@v65A5^5{*I*
# #F-8o#6(39+§v2Bs-pA%74G*x600D<
# ?095yp^70;-n{AC*D3JG7<:61=z$3M
# t939rs6?Es622.[x^5E6<.$Gwo2]]>
# ]u6/r(};H5H1C5v754L3$t9v8y#$.§
# {)]}ox)*.q4y4J50M8.3=0Dt000t]D
# ^n}^K*Bq8=/uq31!$9/509y0qu86H)
# %]{1J<xE7{5499z@42?-H§*vxKKz49
# y2Cy#17M4v9K*9@%(w@.C65(7(1Cp]
```

### return 3 passwords, 20 characters long, only symbols

```Shell
# the following is equal to `$ pwd -a 3 -l 20 -d 0 -s 20`
$ pwd -l 20 -s 20

# result:
# 77165593721763854930
# 57204738210991603203
# 24863164192792672689
```
