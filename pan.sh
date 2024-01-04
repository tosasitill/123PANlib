#!/usr/bin/expect

# 检查参数是否为空
if {[llength $argv] != 3} {
	puts "请提供用户名和密码作为参数"
	exit 1
}


# 设置用户名和密码
set username [lindex $argv 0]
set password [lindex $argv 1]
set filelist [lindex $argv 2]

# 可以在这里使用 username 和 password 变量
puts "用户名: $username"
puts "密码: $password"

# 设置超时时间
set timeout 5

# 运行 Python 脚本
spawn python3 123pan.py

# 期待 "用户名" 提示，发送用户名
expect "请输入用户名:"
send "$username\r"

# 期待 "密码" 提示，发送密码
expect "请输入密码:"
send "$password\r"

# 期待 "命令" 提示，发送上传命令
expect " >"
send "upload\r"

# 期待 "文件路径" 提示，发送文件路径
expect "请输入文件路径："
send "$filelist\r"

