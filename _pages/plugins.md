---
layout: default
title: Plugins
pluginlist:
    texts:
        plug: Plugin
        desc: Description
        date: Création
---
Un plugin, ou complément, est un petit programme distinct, généralement créé par un tiers ou un groupe de bénévoles, qui se rajoute au logiciel principal afin d'étendre ses fonctionnalités. Il en existe plus d'une centaine pour Notepad++, listés sur la page [Plugin Central](http://docs.notepad-plus-plus.org/index.php?title=Plugin_Central) du wiki officiel (en anglais).

## Gestionnaire de plugins

> Depuis la [version 7.5](historique-des-versions.md) le gestionnaire de plugins non-officiel [Plugin Manager](plugins/plugin-manager.md) n'est plus inclut par défaut, et est remplacé depuis la [version 7.6](historique-des-versions.md) par un gestionnaire de plugins natif.

Le gestionnaire de plugins intégré permet d'installer, supprimer et mettre à jour les plugins disponibles.

![La fenêtre du gestionnaire de plugins](/images/plugins/npp_plugins_admin.png)

- Le premier onglet liste les plugins existants, et permet de les installer.
- Le deuxième onglet indique les mises à jour de plugins existantes.
- Le troisième onglet liste les plugins installés et permet de les supprimer ou de les réinstaller.

La fenêtre d'options est accessible depuis le bouton *Settings*.

## Liste des plugins

Certains de ces plugins sont disponibles par défaut si l'option a été laissée cochée lors de l'[installation](installation.md). Certains peuvent ne pas être disponible pour la version 64-bits de Notepad++.

> Depuis la version 7.6, seuls les plugins compatibles et intégrés au projet officiel [nppPluginList](
https://github.com/notepad-plus-plus/nppPluginList/) sont listés et installables depuis le gestionnaire intégré.

<!-- pluginlist -->

## Installation manuelle (<7.6)

> L'installation d'un plugin peut se faire directement par le biais du [Plugin manager](plugins/plugin-manager.md), s'il est lui même installé.

Se réferer à la page du plugin pour télécharger la dernière version et suivre (si elles existent) les instructions d'installation manuelle.

Ces instructions consistent généralement à placer le ou les fichiers `.dll` contenus dans l'archive du plugin dans le répertoire `plugins` du répertoire d'installation de Notepad++ :

    C:\Program Files\Notepad++\plugins

L'archive contient parfois un dossier `Config` dont le contenu doit être placé à l'adresse :

    %APPDATA%\Notepad++\plugins\config

Pour finir, relancer Notepad++.
