---
title: The story behind Pimalaya
description: A Vim plugin that had no business managing mails, the people who hated it and the people who loved it, and how splitting the UI from the logic turned into a whole project.
date: 2026-08-03
---

Pimalaya is today a set of low-level libraries, CLIs, TUIs and mobile apps around personal information management. But it did not start as a project, nor as a plan. It started as a Vim plugin that had no business existing.

## Mails inside Vim

Years ago I discovered Vim, and like many people, I fell hard into it. Once your editor becomes the place where you think, you want everything inside: notes, tasks, code, and in my case, mails.

So I wrote [iris.vim](https://github.com/soywod/iris.vim), a plugin to manage mails inside Vim: reading, replying, archiving, without leaving the editor.

The reception was… mixed. Some people hated me for torturing Vim: it is a text editor, not a mail client, and plugins were never meant to carry a mail workflow. Others loved the concept: their editor was already their home, and mails were the last thing pulling them out of it.

Both were right. And this tension turned out to be the root of everything that came after.

## Splitting the UI from the logic

The critics had a point: Vim is a terrible place to *implement* a mail client. Fetching, parsing, encoding, talking to servers, none of this belongs to a plugin. But the others had a point too: Vim is a nice place to *display* one.

This is when I started to split the UI from the logic. The domain (everything a mail client knows how to do) should live outside of the editor, in a real program. The editor should just be a frontend: buffers in, keystrokes out.

Once the logic lives in its own program, the frontend can be replaced. Vim today, something else tomorrow.

## A CLI, in Rust

The program took the shape of a command-line interface, quite naturally. I wanted to learn Rust for a while, and a mail CLI was a perfect fit:

- It was new: the terminal mail world was full of TUIs like mutt, but a plain, scriptable CLI was rare.
- It had the right size to learn a new language.
- It was exactly the backend a Vim frontend needed: the plugin would just call the CLI and render its output.

This CLI became [Himalaya](https://github.com/pimalaya/himalaya).

## Then it grew

The CLI was supposed to be the end of the story. In fact it was just the beginning, and the same splitting kept happening one level down:

- The email logic moved from the CLI to a dedicated lib, so other tools could reuse it.
- The protocol logic moved from the email lib to low-level libs (IMAP, SMTP etc), so the email layer itself could be replaced.
- A TUI joined the CLI, which proved the point of the whole architecture: same logic, another frontend.
- Then other PIM domains knocked at the door: if it works for mails, why not for contacts? Why not for calendars?

At some point it stopped being "the Himalaya ecosystem", and it became a project on its own: Pimalaya.

## Here we are

Today Pimalaya has plenty of low-level libs, and the mail side is complete: Himalaya CLI, a TUI, and mobile apps on their way. Contacts come next, then calendars.

The plugin that tortured Vim is long gone, but its lesson is still everywhere in what we build: the domain logic lives in reusable layers, and the UI (editor, terminal, phone) is just a view on it.

Not bad for a plugin some people hated :)

## Update (2026-11-26)

The promise above was kept: contacts and calendars did come next. [Cardamum](https://github.com/pimalaya/cardamum) and [Calendula](https://github.com/pimalaya/calendula) reached their `v1`, and the Android app now gathers mails, contacts and calendars in one place. See [Pimalaya for Android enters closed alpha](https://blog.pimalaya.org/pimalaya-android-closed-alpha/) and [Pimalaya goes stable](https://blog.pimalaya.org/pimalaya-goes-stable/).
