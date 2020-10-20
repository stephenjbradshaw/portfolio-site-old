---
path: dual-booting-ubuntu-osx
date: 2020-10-19T22:00:52.348Z
title: Dual booting Ubuntu and OSX
description: A summary of my experience getting Linux working on recent Apple hardware
featuredImage: ../assets/ubuntu-installer.jpg
featuredImageAlt: Ubuntu 20.04 Installer
---
I've been wanting to learn more about Linux and the open-source community for a while – as someone who loves making things I'm really attracted by the DIY culture, and the possibilities for customisation that Linux offers.

However, I'm also a long-time Mac user, and I regularly use software that doesn't have great Linux equivalent – particularly the Adobe CC suite and Max/MSP (a visual programming environment for working with interactive multimedia).

So, not being in a position to buy a second machine, I decided to have a go at setup up a dual-boot / OSX system on my MacbookPro 16,1 (2019) as a hobby project. 

I soon discovered that there are a lot of incompatibilities between recent Apple hardware the Linux kernel as it currently stands, and I ended up on a much steeper learning curve than I'd expected...! Using guides and patches written by others, I was eventually able to set up a working system, which I used as my main dev environment throughout my time on the [Northcoders](https://www.northcoders.com/) coding bootcamp. The install process taught me a lot about Linux, it really built my confidence at the command line, and I had a lot of fun to boot! (pun intended).

This is a broad overview of the steps I took to get my system up and running – my hope is that it might be useful to other owners of recent Mac hardware wanting to install Ubuntu natively, rather than on a virtual machine. 
I've added links to much of the guidance I followed – but [this one](https://gist.github.com/gbrow004/096f845c8fe8d03ef9009fbb87b781a4) covers most of the fixes.

I should say that this all happened before Apple announced, last June, that they would be switching to ARM CPU architecture. It seems that this will eventually mean the end of being able to run Linux natively on Mac hardware – but for now, I'm going to enjoy having the best of both worlds!

***

## Hardware / Software used
- 16-inch Macbook Pro 2019 (Model indentifier 16,1)
- Ubuntu 20.04 LTS (Focal Fossa). This uses Linux kernel v5.4 LTS.
- Linux Kernel v5.6-rc6 with drivers and patches by [MCMrARM](https://github.com/MCMrARM/mbp2018-bridge-drv) and [
Aun-Ali Zaidi](https://github.com/aunali1/linux-mbp-arch)
- [rEFInd](https://www.rodsbooks.com/refind/) boot manager

## Hardware problems
Doing my research, I discovered that even the latest Linux kernels (as of May 2020) don’t support post-c.2018 Apple hardware. If a Linux distribution boots successfully on a Mac at all, often the WiFi, keyboard & trackpad, audio and Touch Bar will not work. One of the main problems is Apple’s [T2 security chip](https://support.apple.com/en-us/HT208862). As well as preventing third-party operating systems from running, it controls access to most of the peripherals, including the built-in keyboard and Touch Bar. Luckily, there are several developers out there who have written patches to add support.

## Backing up

The first thing I did was make a full time machine backup. After doing some Googling, I was reassured by the fact that Time Machine now provides the ability to boot a recovery OS from the backup disks it creates, allowing you to recover in case you completely mess up your hard drive (for example while partitioning).

## Disabling Secure Boot

Doing this bypasses features of the Apple T2 security chip that would ordinarily prevent an OS other than MacOS from booting. You also have to manually allow booting from external media. [This guide](https://support.apple.com/en-gb/HT208198) describes how to both of those things.

## Installing Ubuntu *without* a bootloader

I downloaded Ubuntu 20.04, and, following the [docs](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview) I flashed the disk image to a USB stick, partitioned my hard drive, and ran the installer. My first couple of install attempts failed while the installer was trying to set up the GRUB [bootloader](https://linuxhint.com/what-is-a-boot-loader/). The error was: "Executing `grub-install /dev/nvme0n1` failed" (`dev/nvme0n1` is the path my internal SSD). I had to reformat my Linux partition and start again, installing Ubuntu *without* the bootloader (the command is `sudo ubiquity -b`). Not having a bootloader isn't a problem – I learnt that recent Linux kernels have the ability to effectively boot themselves using an [EFI stub loader](https://www.rodsbooks.com/efi-bootloaders/efistub.html). This is where rEFInd comes in...

## Installing the rEFInd boot manager

 rEFInd is a boot manager – it automatically detects installed operating systems and provides a nice GUI that allows you to choose between them. It also allows you to choose between multiple installed Linux kernels, which came in handy later on. To install rEFInd on my Mac I followed this [installation guide](https://www.rodsbooks.com/refind/installing.html). Additionally, I needed to temporarily disable [System Integrity Protection](https://www.macworld.co.uk/how-to/how-turn-off-mac-os-x-system-integrity-protection-rootless-3638975/) (an Apple security feature that restricts the privileges of the root user) and also manually install the [ext4 filesystem driver](https://www.rodsbooks.com/refind/drivers.html#installing), allowing rEFInd to read data on the Linux partition.

## Installing kernel patches and drivers

As expected, very little of the hardware worked straight out of the box using Ubuntu 20.04. To proceed with fixing the system, I had to use an external screen, USB wifi card, keyboard, and mouse. I found  a set of patches that (experimentally) provide the extra hardware support, and following [these instructions] (https://gist.github.com/gbrow004/096f845c8fe8d03ef9009fbb87b781a4#compiling-a-new-kernel-with-patches-to-complete-almost-the-functionality-of-your-mbp) compiled a custom kernel with the ability to talk to the internal keyboard, trackpad and touchpad.

I also needed to separately compile and install a driver called `bce` that provides a communication channel with the Apple T2 security chip. This can be found [here](https://github.com/MCMrARM/mbp2018-bridge-drv) and instructions to compile it are [here](https://gist.github.com/gbrow004/096f845c8fe8d03ef9009fbb87b781a4#keyboardtouchpad). Additionally, I needed to manually install dependencies, namely `flex` and `bison`.

## Problems loading the BCE driver

Once I’d installed the custom kernel and the `bce` driver, I was able to boot into Ubuntu using that kernel (in my case a patched version of `5.6-rc6`) via the rEFInd GUI. On first boot, none of the broken hardware worked. It seemed that the `bce` driver wasn't loading, despite being added to `/etc/modules` as in the instructions. I tried to load the module using the `modprobe` command, but this didn't work either. In the end, force-loading the driver using `insmod` worked (`sudo insmod <path to bce.ko>`). When I did this, **magically most of the peripherals sprang to life, including the Touch Bar!**  As of yet, I haven’t found a way round having to use the `insmod` command, other than running a `bash` script with the command at login. Not ideal, but it works...

## Getting the internal screen working

At first the internal screen would still not light up. After doing some Googling, I found that some people have had success by adding `amdgpu.dc=0` to the kernel parameters. This worked perfectly for me, and I added it permanently to rEFInd's config file, following this guide to adding kernel parameters from the [Arch Linux site](https://wiki.archlinux.org/index.php/kernel_parameters#rEFInd).

## What as the final result like?

I now have a really fast Ubuntu system that I use for software development, running alongside the pre-installed Mac OSX. Most things work pretty well, but there’s definitely room for improvement. Here’s how things are running at the moment, in no particular order:

* SSD - Working (but no luck as yet mounting the `apfs` partition that holds my OSX installation)
* AMD Graphics card and internal screen – Working
* Onboard (Intel) graphics card – Not tested
* Keyboard – Working
* Trackpad – Working
* Touchbar – Working (basic functionality)
* WiFi – Not working (As a workaround, I use a USB wifi card)
* Audio output – Working (but the audio is quite tinny compared to OSX)
* Internal microphone – Not working (As a workaround, I've been using the microphone on a USB webcam.)
* Suspend & hibernation – Not working
* USB – Working
* Thunderbolt – Working

## Would I recommend the process?

As a learning experience – absolutely! It forced me to research and learn about lots of things like **UEFI booting**, Linux **kernel modules** and the **Linux filesystem**, how to compile software written in C and much more – and I really enjoyed the challenge of it.

I would not recommend it if you want a quick way to get going with Linux! (Although apparently the process is significantly easier on older  Macs that don't have a T1 or T2 chip).

If and when I change my setup in the future, I'll probably use a virtual machine, or ideally buy a PC and dedicate that to running Linux. That said, I've been really glad of the fact that my Mac's full performance is leveraged in my current setup.

***

### Appendix: Useful `bash` commands and files for debugging hardware issues
- `modprobe`: add or remove a loadable kernel module
- `insmod` / `rmmod`: alternative commands to insert or remove kernel modules
- `dmesg`: view kernel messages
-  `dmesg | grep -i usb`: perform a case-**i**nsensitive search of the `dmesg` output for "usb"
- `lspci`: list all PCI devices
- `lspci -k`: list all PCI devices, including information about **which kernel modules are handling each device**.
- `lspci -v | grep -i usb`: perform a case-**i**nsensitive search of the `lspci` output for "usb"
- `/etc/modprobe.d/blacklist.conf`: kernel modules listed here are blacklisted
- `/etc/modules`: kernel modules listed here are loaded at boot time