Tìm kiếm và trình diễn thông tin
================================

Điều kiện
---------

Phải sử dụng phiên bản của Node >= 6.0. Ví dụ:

```bash
$ node --version
v8.4.0
```

Chú ý: Trên Linux (Ubuntu) nếu không có lệnh node, có thể phải download NVM hoặc nodejs-legacy.

```bash
$ sudo apt-get install nodejs-legacy
```

Cài đặt
-------

Chạy các dòng lệnh sau:

```bash
$ git clone https://github.com/clitetailor/ir-20171.git crawler

$ cd crawler

$ npm install -g
```

Sau đó có thể sử dụng lệnh crawler từ bất kì thư mục nào của máy.

```bash
$ crawler --help
```

Để gỡ cài đặt chạy lênh sau:

```bash
$ npm uninstall -g crawler
```

Để cập nhật chỉ cần pull lại project, crawler sẽ tự động được cập nhật.

```bash
$ git pull
```