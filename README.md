# Link-Vote-App Project

It is an application that you can add new links, up vote or down vote to existing links or remove a link from the list. In this application you can sort list by most-voted or less-voted. Also if you add too many links to the list, there is a pagination to group them.

# Quickstart

### Install

Clone Link-Vote-App project:
```
https://github.com/CuneytYilmaz/link-vote-app.git
```

Install project dependencies via npm:
```
npm install
```

Start the development server:
```
npm start
```

 # Pages
 
1. **Link Lists No Items** : The first time there will be no items in the list. So in the beginning you will see this page.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/home-no-items-screen.png" height="450"/>
</p>

2. **Add Link View** : To add a new link you can use this form. There is a validation to add it. Name and URL cannot be empty, URL must be in web link format(contains http:// or https://) and new URL must not exists in the list.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/add-screen.png" height="450"/>
</p>

3. **Added Link View** : When you add the new link to the list, there is a message (toast) to show you the result.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/added-item-screen.png" height="450"/>
</p>

4. **Added Link View** : By default, links ordered by Last Added. But you can order the list by Most Voted or Less Voted options.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/home-order-by-screen.png" height="450"/>
</p>

5. **Remove Link View** : If you hover the link, a remove button appears. You can delete link via this delete button.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/home-remove-screen.png" height="450"/>
</p>

6. **Remove Modal View** : When you click the delete button, the modal shows. You can cancel the process or delete the link by clicking the OK button in modal.

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/home-remove-modal-screen.png" height="450"/>
</p>

7. **Removed Link View** : After the delete process, there is a message (toast) to show you the result. 

<p align="center">
<img src="https://github.com/CuneytYilmaz/link-vote-app/blob/master/src/img/home-item-removed-screen.png" height="450"/>
</p>

 # Contributing

Shaking-Tree-App was originally written and maintaned by Cuneyt Yilmaz. Many improvements and bugfixes were contributed by the [open source community](https://github.com/cuneytyilmaz/link-vote-app/graphs/contributors).

 # License

MIT. Please see the [license file](LICENSE) for more information.
