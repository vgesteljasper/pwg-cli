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

## Usage

When --amount is 1 (default), the password will be automatically copied to the clipboard
unless the -N flag is passed.

## Options

### Parameters

Chaining of these parameters like `pwg -ds 10` is **NOT** possible. Instead use `pwg -d 10 -s 10`.

parameter | type | default | description
--- | --- | --- | ---
**-l**, --length | Int | 20 | **length** of the password to be generated
**-d**, --digits | Int | 0 | amount of **digits** for the password
**-s**, --symbols | Int | 0 | amount of **symbols** for the password
**-a**, --amount | Int | 1 | **amount** of passwords to generate

### Flags

You can chain these flags like `pwg -SN`.

flag | description
--- | ---
**-S**, --silent | **Don't print** options panel
**-N**, --nocopy | **Don't copy** password to clipboard

## Examples

### return 1 password, default options

```Shell
$ pwd
> ┌───────────────────────────────────────────┐
  │                                           │
  │   --length, -l      20    -> fallback     │
  │   --digits, -d       0    -> fallback     │
  │   --symbols, -s      0    -> fallback     │
  │   --amount, -a       1    -> fallback     │
  │                                           │
  └───────────────────────────────────────────┘
  MBLxqnLDnEsMEEMGMxyA
```

### return 3 passwords, default options, --silent

```Shell
$ pwd -a 3 -S
> uKJALsKBwCrCMDpposnL
  GDMLMyFJyGtMqxBsqCqB
  MHnLFxvACDnnHtJJsLID
```

### return 10 passwords, 20 characters long, 10 digits, 10 symbols

```Shell
$ pwd -a 10 -d 10 -s 10
> ┌───────────────────────────────────────────┐
  │                                           │
  │   --length, -l      20    -> fallback     │
  │   --digits, -d      10                    │
  │   --symbols, -s     10                    │
  │   --amount, -a      10                    │
  │                                           │
  └───────────────────────────────────────────┘
  §/)=2/815;535^2§=23:
  >>9.29[/>87.:(6497:9
  §§}708&<6}10.3>=§674
  @7§25!3/&5949)1(@5@/
  +]3518-0^35&55^5^§§.
  +=44^537$&0?2/%§304%
  677/[(08^529&/{+8&8/
  1}(/314§<5@783[<98%{
  352/?]6{5]2?9$^591=]
  ?&/163:76+<6>63@*?14
```

### return 1 passwords, 40 characters long, 20 digits, --silent

```Shell
$ pwd -l 40 -d 20 -S
> 1DE15nn40sKE6K05y0p56oxr73x928p1ox67LrB5
```
