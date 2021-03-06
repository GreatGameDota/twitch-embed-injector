# Twitch embed Injector Extension

Simple Chrome extension that injects a new player whenever you load a twitch stream. The code is fully open sourced so there is no hazzards hidden in the code.

Main script taken from [this thread](https://github.com/odensc/ttv-ublock/issues/11#issuecomment-730005840) talking about solutions to Twitch ads. This extension was simply made so that you don't have to manually input the command everytime you load a stream.

EDIT: You can toggle in and out of Theater mode with Alt+T (below paragraph irrelevant)  
A disadvantage of this technique discussed was that theater mode does not work. However if you put the stream into theater mode before swapping the players then the embedded player is also put into theater mode, though you cannot exit out of it.

To install as an extension just download and unzip the ZIP file in releases and load unpacked in the Chrome extensions page.

Known bugs:

- Two players play at the same time causing overlapping audio (fixed with a refresh)

- Previous bug also happens with the preroll ad where it continues to play in the background (also fixed with refresh)

- Embed starts muted and sometimes gives the prompt of broadcaster is set for mature audiences (no way to fix just an annoyance)

- Theater mode (you can toggle in and out with Alt+T) and Fullscreen

- Havn't tested this on Firefox or on an Incognito Chrome browser

- Version 1.0.1 fixed a bug where the script would inject into the Twitch clip player

This works as of 11/19/2020 on Windows 10 with Chrome browser bypassing both preroll and midroll ads.
