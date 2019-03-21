Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports MySql.Data.MySqlClient
Imports System.Data
Imports MySql.Data

Partial Class ForgetPassword
    Inherits System.Web.UI.Page

    Dim con As String = ConfigurationManager.ConnectionStrings("myConnectionString").ConnectionString
    Dim SQLConnection As New MySqlConnection(con)
    Dim cmd As New MySqlCommand
    Dim dr As MySqlDataReader

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        Try
            TextBox1.Focus()
        Catch ex As Exception
            Response.Redirect("ErrorPage.aspx", False)
        End Try
    End Sub

    Protected Sub Button1_Click(sender As Object, e As System.EventArgs) Handles Button1.Click
        Dim en As String = TextBox1.Text
        'If en.Length = 6 And Char.IsLetter(en(0)) And Char.IsLetter(en(1)) And Char.IsDigit(en(2)) And Char.IsDigit(en(3)) And Char.IsDigit(en(4)) And Char.IsDigit(en(5)) Then
        'GoTo Line1
        'Else
        'Response.Write("<script>alert('Enter Valid Enrollment Number');</script>")
        'GoTo Line2
        'End If

Line1:
        Try
            cmd.CommandText = "select * from login where regno=@reg_no"
            cmd.Parameters.AddWithValue("@reg_no", TextBox1.Text)
            cmd.Connection = SQLConnection
            SQLConnection.Open()
            dr = cmd.ExecuteReader()
            If dr.Read Then
                Dim login_Email As String = dr(1).ToString
                Dim login_Name As String = dr(2).ToString
                Dim login_Pass As String = dr(3).ToString

                Using email As New MailMessage("Your Email ID", login_Email)
                    email.Subject = "Password Recovery"
                    email.Body = "Dear " + login_Name + "<br/><br/>Your Password is : " + login_Pass
                    email.IsBodyHtml = True
                    Dim smtp As New SmtpClient()
                    smtp.Host = "smtp.gmail.com"
                    smtp.EnableSsl = True
                    Dim credential As New NetworkCredential("Your Email ID", "Your Password")
                    smtp.UseDefaultCredentials = True
                    smtp.Credentials = credential
                    smtp.Port = 587
                    smtp.Send(email)
                    TextBox1.Text = ""
                    Response.Write("<script>alert('Your Password has been sent to your Registered Email Address!');</script>")
                    'Response.Redirect("Login.aspx", False)
                    'MsgBox("Registration Successful!")
                End Using
            Else
                Response.Write("<script>alert('Invalid User, If not signed up yet !!! SIGN UP');</script>")
                'MsgBox("Invalid User, If not signed up yet !!! SIGN UP")
            End If
        Catch ex As Exception
            'MsgBox(ex.ToString)
            Response.Redirect("ErrorPage.aspx", False)
        Finally
            SQLConnection.Close()
        End Try
Line2:
    End Sub
End Class
